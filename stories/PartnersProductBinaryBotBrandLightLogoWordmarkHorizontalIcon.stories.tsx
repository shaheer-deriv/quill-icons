import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductBinaryBotBrandLightLogoWordmarkHorizontalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductBinaryBotBrandLightLogoWordmarkHorizontalIcon',
  component: PartnersProductBinaryBotBrandLightLogoWordmarkHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductBinaryBotBrandLightLogoWordmarkHorizontalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductBinaryBotBrandLightLogoWordmarkHorizontalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
