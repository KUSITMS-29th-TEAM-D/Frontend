import { ColorTypes, DeviceTypes, FontTypes } from '@/styles/theme/theme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorTypes;
    font: FontTypes;
    device: DeviceTypes;
  }
}
