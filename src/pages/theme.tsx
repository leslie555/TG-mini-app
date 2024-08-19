import { Fragment } from 'react';
import { useThemeParams } from '@telegram-apps/sdk-react';
import { Cell, Divider, List, Text } from '@telegram-apps/telegram-ui';

function getContrastColor(hexColor: string) {
  // 移除可能存在的 # 符号
  hexColor = hexColor.replace('#', '');

  // 将十六进制颜色转换为 RGB
  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);

  // 计算亮度
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // 如果亮度大于 128，返回黑色，否则返回白色
  return brightness > 128 ? '#000000' : '#FFFFFF';
}

export function Theme() {
  const themeParams = useThemeParams();
  return (
    <List>
      {Object.entries(themeParams.getState()).map(([key, value]) => {
        return (
          <Fragment key={key}>
            <Cell style={{ background: value, color: getContrastColor(value ?? '') }}>
              <Text weight="1">{key}:</Text>
              <Text weight="3">{value}</Text>
            </Cell>
            <Divider />
          </Fragment>
        );
      })}
    </List>
  );
}
