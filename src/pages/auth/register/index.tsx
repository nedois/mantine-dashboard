import { PiGoogleLogoDuotone as GoogleIcon, PiXLogoDuotone as XIcon } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
import { Anchor, Button, Divider, Group, Stack, Text, Title } from '@mantine/core';
import { Page } from '@/components/page';
import { UnderlineShape } from '@/components/underline-shape';
import { paths } from '@/routes';
import { RegisterForm } from './register-form';

export default function RegisterPage() {
  return (
    <Page title="Register">
      <Stack gap="xl">
        <Stack>
          <Title order={2}>
            Join us and never miss a thing{' '}
            <Text fz="inherit" fw="inherit" component="span" pos="relative">
              REGISTER
              <UnderlineShape
                c="blue"
                left="0"
                pos="absolute"
                h="0.625rem"
                bottom="-1rem"
                w="7rem"
              />
            </Text>
          </Title>
          <Text fz="sm" c="dimmed">
            By signing up, you will gain access to exclusive content, special offers, and be the
            first to hear about exciting news and updates.
          </Text>
        </Stack>

        <Group grow>
          <Button leftSection={<XIcon size="1rem" />} variant="outline" color="gray">
            Register with X
          </Button>
          <Button leftSection={<GoogleIcon size="1rem" />} variant="outline" color="gray">
            Register with Google
          </Button>
        </Group>

        <Divider label="OR" labelPosition="center" />

        <RegisterForm />

        <Text fz="sm" c="dimmed">
          Already have an account?{' '}
          <Anchor fz="inherit" component={NavLink} to={paths.auth.login}>
            Login
          </Anchor>
        </Text>
      </Stack>
    </Page>
  );
}
