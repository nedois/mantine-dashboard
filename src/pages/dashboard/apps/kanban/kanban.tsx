import { DndContext } from '@dnd-kit/core';
import { faker } from '@faker-js/faker';
import { generateMany } from '@/utilities/factory';
import { randomInt } from '@/utilities/number';
import { generateId } from '@/utilities/uid';
import { KanbanBoard } from './kanban-board';
import { KanbanCard } from './kanban-card';
import { KanbanColumn } from './kanban-column';

const titles = ['Todo', 'In progress', 'Read to test', 'Review', 'Done'];

const data = generateMany(titles.length, (i) => ({
  id: generateId(),
  title: titles[i],
  cards: generateMany(randomInt({ min: 2, max: 5 }), () => ({
    id: generateId(),
    priority: faker.helpers.arrayElement(['low', 'normal', 'high'] as const),
    tags: generateMany(randomInt({ min: 1, max: 5 }), () => ({
      id: generateId(),
      label: faker.helpers.arrayElement(['mobile', 'backend', 'frontend']),
      color: faker.internet.color(),
    })),
    commentsCount: randomInt({ min: 0, max: 50 }),
    attachmentsCount: randomInt({ min: 0, max: 5 }),
    assignees: generateMany(randomInt({ min: 3, max: 6 }), () => ({
      id: generateId(),
      displayName: faker.person.fullName(),
      avatarUrl: `https://i.pravatar.cc/300?u=${faker.internet.email()}`,
    })),
    title: faker.lorem.sentence({ min: 1, max: 4 }),
    description: faker.lorem.paragraph(),
  })),
}));

export function Kanban() {
  return (
    <DndContext>
      <KanbanBoard>
        {data.map((column) => (
          <KanbanColumn key={column.id} id={column.id} title={column.title}>
            {column.cards.map((card) => (
              <KanbanCard
                key={card.id}
                id={card.id}
                title={card.title}
                description={card.description}
                assignees={card.assignees}
                tags={card.tags}
                priority={card.priority}
                commentsCount={card.commentsCount}
                attachmentsCount={card.attachmentsCount}
              />
            ))}
          </KanbanColumn>
        ))}
      </KanbanBoard>
    </DndContext>
  );
}
