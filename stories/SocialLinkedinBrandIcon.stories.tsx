import type { Meta, StoryObj } from '@storybook/react';

import { SocialLinkedinBrandIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialLinkedinBrandIcon',
  component: SocialLinkedinBrandIcon,
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
} satisfies Meta<typeof SocialLinkedinBrandIcon>;

export default meta;

type Story = StoryObj<typeof SocialLinkedinBrandIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
