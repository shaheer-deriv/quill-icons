import type { Meta, StoryObj } from '@storybook/react';

import { SocialTelegramIcon } from '../src/react/Social/Social';

const meta = {
  title: 'social/SocialTelegramIcon',
  component: SocialTelegramIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SocialTelegramIcon>;

export default meta;

type Story = StoryObj<typeof SocialTelegramIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
