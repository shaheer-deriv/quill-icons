import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductBinaryBotBlackWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductBinaryBotBlackWordmarkVerticalIcon',
  component: PartnersProductBinaryBotBlackWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductBinaryBotBlackWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductBinaryBotBlackWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
