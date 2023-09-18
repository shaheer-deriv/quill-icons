import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductBinaryBotBrandLightWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductBinaryBotBrandLightWordmarkVerticalIcon',
  component: PartnersProductBinaryBotBrandLightWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductBinaryBotBrandLightWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductBinaryBotBrandLightWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
