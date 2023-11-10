import type { Meta, StoryObj } from '@storybook/react';

import { SocialGoogleWhiteIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialGoogleWhiteIcon',
  component: SocialGoogleWhiteIcon,
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
} satisfies Meta<typeof SocialGoogleWhiteIcon>;

export default meta;

type Story = StoryObj<typeof SocialGoogleWhiteIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
