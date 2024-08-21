import { useRef, useState } from 'react';
import { useHapticFeedback, useInitData, useQRScanner, useUtils } from '@telegram-apps/sdk-react';
import {
  Button,
  Cell,
  Divider,
  IconButton,
  Info,
  Input,
  List,
  Section,
  Text,
} from '@telegram-apps/telegram-ui';
import { Icon20Copy } from '@telegram-apps/telegram-ui/dist/icons/20/copy';

export function Chat() {
  const utils = useUtils();
  const initData = useInitData();
  const scanner = useQRScanner();
  const haptic = useHapticFeedback();
  const textRef = useRef<HTMLElement>(null);

  const [text, setText] = useState('');
  // const bm = useBiometryManager();
  // useEffect(() => {
  //   console.log('bm===', bm);
  //   if (bm ) {
  //     bm.requestAccess({ reason: 'Authorize to start using biometry' }).then((accessGranted) => {
  //       console.log('Access granted===', accessGranted);
  //     });
  //   }
  // }, [bm, lp]);

  return (
    <List
      style={{
        background: 'var(--tgui--secondary_bg_color)',
        padding: 10,
      }}
      id="chat_leslie"
    >
      {initData?.user && (
        <Section>
          <Cell>
            <Text className="font-bold">User Name: </Text>
            {initData.user.firstName + ' ' + initData.user.lastName}
          </Cell>
          <Cell>
            <Text className="font-bold">User ID: </Text>
            {initData.user.id}
          </Cell>
          <Cell>
            <Text className="font-bold">Lang Code: </Text>
            {initData.user.languageCode}
          </Cell>
          <Cell>
            <Text className="font-bold">Chat Type: </Text>
            {initData.chatType}
          </Cell>
        </Section>
      )}
      <Cell>
        <Button
          onClick={() => {
            scanner
              .open({
                text: '57Blocks Scan QR code',
                capture({ data }) {
                  console.log('qrdata===', data);
                  // 条件判断
                  return true;
                },
              })
              .then((qr) => {
                // May be something like 'https://t.me/heyqbnk' or null.
                console.log('qr===', qr);

                if (qr?.startsWith('https://t.me/')) {
                  utils.openTelegramLink('https://t.me/leslie_57_bot');
                } else if (qr) {
                  utils.openLink(qr);
                }
              });
          }}
        >
          Scan QRcode
        </Button>
      </Cell>
      {/* <Divider />
      <Cell className="flex flex-col items-center">
        <Button
          onClick={() => {
            if (bm) {
              bm.openSettings();
            }
          }}
        >
          打开生物授权设置
        </Button>
      </Cell> */}
      <Divider />
      <Cell>
        <Text ref={textRef}>
          <Input placeholder="输入想要复制的内容" />
        </Text>
        <IconButton
          mode="gray"
          size="s"
          onClick={async () => {
            if (textRef.current) {
              const textToCopy = textRef.current.querySelector('input')?.value ?? '';
              console.log('===textToCopy===', textToCopy);
              await navigator.clipboard.writeText(textToCopy);
            }
          }}
        >
          <Icon20Copy />
        </IconButton>
      </Cell>
      <Divider />
      <Cell>
        <Button
          onClick={() => {
            haptic.impactOccurred('heavy');
          }}
        >
          触感 impactOccurred heavy
        </Button>
      </Cell>
      <Cell>
        <Button
          onClick={() => {
            haptic.notificationOccurred('success');
          }}
        >
          触感 成功通知
        </Button>
      </Cell>
      <Cell>
        <Button
          onClick={() => {
            haptic.selectionChanged();
          }}
        >
          触感selectionChanged
        </Button>
      </Cell>
      <Divider />
      <Cell className="flex flex-col items-center">
        <Button
          onClick={() => {
            utils.readTextFromClipboard().then((data) => {
              console.log('Clipboard data:', data);
              // Output: string or null
              setText(data!);
            });
          }}
        >
          Show Clipboard Text
        </Button>
        <Info subtitle={text} type="text">
          Clipboard Text is
        </Info>
      </Cell>
    </List>
  );
}
