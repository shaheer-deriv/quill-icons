import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeListIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeListIcon',
  component: IllustrativeListIcon,
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
} satisfies Meta<typeof IllustrativeListIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeListIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
