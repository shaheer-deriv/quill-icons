import type { Meta, StoryObj } from '@storybook/react';

import { SocialGoogleBrandIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialGoogleBrandIcon',
  component: SocialGoogleBrandIcon,
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
} satisfies Meta<typeof SocialGoogleBrandIcon>;

export default meta;

type Story = StoryObj<typeof SocialGoogleBrandIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
