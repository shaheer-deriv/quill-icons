import type { Meta, StoryObj } from '@storybook/react';

import { SocialXTwitterBlackIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialXTwitterBlackIcon',
  component: SocialXTwitterBlackIcon,
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
} satisfies Meta<typeof SocialXTwitterBlackIcon>;

export default meta;

type Story = StoryObj<typeof SocialXTwitterBlackIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
