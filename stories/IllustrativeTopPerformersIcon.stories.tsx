import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeTopPerformersIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeTopPerformersIcon',
  component: IllustrativeTopPerformersIcon,
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
} satisfies Meta<typeof IllustrativeTopPerformersIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeTopPerformersIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
