import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeTransparentIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeTransparentIcon',
  component: IllustrativeTransparentIcon,
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
} satisfies Meta<typeof IllustrativeTransparentIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeTransparentIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
