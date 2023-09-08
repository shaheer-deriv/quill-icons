import type { Meta, StoryObj } from '@storybook/react';

import { SocialTiktokBlackIcon } from '../src/react/Social/Social';

const meta = {
  title: 'social/SocialTiktokBlackIcon',
  component: SocialTiktokBlackIcon,
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
} satisfies Meta<typeof SocialTiktokBlackIcon>;

export default meta;

type Story = StoryObj<typeof SocialTiktokBlackIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
