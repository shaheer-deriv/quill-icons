import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductBinaryBotWhiteWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductBinaryBotWhiteWordmarkVerticalIcon',
  component: PartnersProductBinaryBotWhiteWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductBinaryBotWhiteWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductBinaryBotWhiteWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
