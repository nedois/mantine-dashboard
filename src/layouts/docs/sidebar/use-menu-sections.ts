import { ElementType, useEffect, useState } from 'react';
import invariant from 'tiny-invariant';
import { icons } from './sidebar-icons';

interface Section {
  title: string;
  items: {
    name: string;
    href: string;
    icon: ElementType;
  }[];
}

interface PostMetadata {
  title: string;
  icon?: string;
}

export function useMenuSections() {
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    const files: Record<string, PostMetadata> = import.meta.glob('/src/pages/docs/**/*.mdx', {
      eager: true,
      import: 'metadata',
    });

    const newSections = Object.entries(files).reduce(
      (acc, [path, metadata]) => {
        const sectionSlug = path.split('/').at(-2);
        invariant(sectionSlug, 'Section title must be defined');

        // Create a new section if it doesn't exist
        if (sectionSlug && !acc[sectionSlug]) {
          acc[sectionSlug] = { title: '', items: [] };
        }

        // Set the section title
        const postSlug = path.split('/').at(-1)?.replace('.mdx', '');
        const isSectionMetadata = postSlug === 'metadata';

        if (isSectionMetadata) {
          acc[sectionSlug].title = metadata.title;
          return acc;
        }

        // Add post metadata to the section
        acc[sectionSlug].items.push({
          name: metadata.title,
          href: path.replace('/src/pages', '').replace('.mdx', ''),
          icon: icons[metadata.icon || 'default'],
        });

        return acc;
      },
      {} as Record<string, Section>
    );

    setSections(Array.from(Object.values(newSections)));
  }, []);

  return sections;
}
