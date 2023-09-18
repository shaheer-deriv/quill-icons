import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductBinaryBotBrandLightLogoHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductBinaryBotBrandLightLogoHorizontalIcon',
  component: PartnersProductBinaryBotBrandLightLogoHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductBinaryBotBrandLightLogoHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductBinaryBotBrandLightLogoHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
