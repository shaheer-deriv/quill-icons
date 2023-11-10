import type { Meta, StoryObj } from '@storybook/react';

import { SocialFacebookWhiteIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialFacebookWhiteIcon',
  component: SocialFacebookWhiteIcon,
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
} satisfies Meta<typeof SocialFacebookWhiteIcon>;

export default meta;

type Story = StoryObj<typeof SocialFacebookWhiteIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
