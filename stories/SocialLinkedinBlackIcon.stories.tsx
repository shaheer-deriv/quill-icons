import type { Meta, StoryObj } from '@storybook/react';

import { SocialLinkedinBlackIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialLinkedinBlackIcon',
  component: SocialLinkedinBlackIcon,
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
} satisfies Meta<typeof SocialLinkedinBlackIcon>;

export default meta;

type Story = StoryObj<typeof SocialLinkedinBlackIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
