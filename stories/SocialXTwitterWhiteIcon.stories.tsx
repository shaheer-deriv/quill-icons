import type { Meta, StoryObj } from '@storybook/react';

import { SocialXTwitterWhiteIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialXTwitterWhiteIcon',
  component: SocialXTwitterWhiteIcon,
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
} satisfies Meta<typeof SocialXTwitterWhiteIcon>;

export default meta;

type Story = StoryObj<typeof SocialXTwitterWhiteIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
