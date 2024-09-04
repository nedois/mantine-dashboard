import {
  PiChatDuotone,
  PiGearSixDuotone,
  PiHeartDuotone,
  PiPauseDuotone,
  PiSignOut,
  PiStarDuotone,
  PiTrashDuotone,
  PiUserSwitchDuotone,
} from 'react-icons/pi';
import { Avatar, AvatarProps, ElementProps, Menu } from '@mantine/core';
import { useAuth, useGetAccountInfo, useLogout } from '@/hooks';

type CurrentUserProps = Omit<AvatarProps, 'src' | 'alt'> & ElementProps<'div', keyof AvatarProps>;

export function CurrentUser(props: CurrentUserProps) {
  const { mutate: logout } = useLogout();
  const { setIsAuthenticated } = useAuth();
  const { data: user } = useGetAccountInfo();

  const handleLogout = () => {
    logout({ variables: null }, { onSuccess: () => setIsAuthenticated(false) });
  };

  return (
    <Menu>
      <Menu.Target>
        <Avatar
          src={user?.avatarUrl}
          alt={user?.displayName ?? 'Current user'}
          {...props}
          style={{ cursor: 'pointer', ...props.style }}
        >
          CU
        </Avatar>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item leftSection={<PiHeartDuotone size="1rem" color="var(--mantine-color-red-6)" />}>
          Liked posts
        </Menu.Item>
        <Menu.Item
          leftSection={<PiStarDuotone size="1rem" color="var(--mantine-color-yellow-6)" />}
        >
          Saved posts
        </Menu.Item>
        <Menu.Item leftSection={<PiChatDuotone size="1rem" color="var(--mantine-color-blue-6)" />}>
          Your comments
        </Menu.Item>

        <Menu.Label>Settings</Menu.Label>
        <Menu.Item leftSection={<PiGearSixDuotone size="1rem" />}>Account settings</Menu.Item>
        <Menu.Item leftSection={<PiUserSwitchDuotone size="1rem" />}>Change account</Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item leftSection={<PiPauseDuotone size="1rem" />}>Pause subscription</Menu.Item>
        <Menu.Item color="red" leftSection={<PiTrashDuotone size="1rem" />}>
          Delete account
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item leftSection={<PiSignOut size="1rem" />} onClick={handleLogout}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
