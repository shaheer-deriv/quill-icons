import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductBinaryBotBrandLightLogoWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductBinaryBotBrandLightLogoWordmarkVerticalIcon',
  component: PartnersProductBinaryBotBrandLightLogoWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductBinaryBotBrandLightLogoWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductBinaryBotBrandLightLogoWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
