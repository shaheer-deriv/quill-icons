import type { Meta, StoryObj } from '@storybook/react';

import { SocialTiktokWhiteIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialTiktokWhiteIcon',
  component: SocialTiktokWhiteIcon,
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
} satisfies Meta<typeof SocialTiktokWhiteIcon>;

export default meta;

type Story = StoryObj<typeof SocialTiktokWhiteIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
