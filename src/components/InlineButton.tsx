import { InlineButtons } from '@telegram-apps/telegram-ui';
import { Icon24Chat } from '@telegram-apps/telegram-ui/dist/icons/24/chat';

export function InlineButton() {
  return (
    <div
      style={{
        maxWidth: 160,
      }}
    >
      <InlineButtons.Item mode="plain" text="Chat">
        <Icon24Chat />
      </InlineButtons.Item>
    </div>
  );
}
