import { Avatar } from '@telegram-apps/telegram-ui';

export function UserAvatar() {
  return (
    <div>
      <Avatar
        fallbackIcon={<span>😕</span>}
        size={48}
        src="https://avatars.githubusercontent.com/u/84640980?v=4"
      >
        <Avatar.Badge large type="number">
          42
        </Avatar.Badge>
      </Avatar>
    </div>
  );
}
