import { InlineButtons } from '@telegram-apps/telegram-ui';

export function InlineButton() {
  return (
    <div
      style={{
        maxWidth: 160,
      }}
    >
      <InlineButtons.Item mode="plain" text="Chat">
        {/* <Icon24Chat /> */}
      </InlineButtons.Item>
    </div>
  );
}
