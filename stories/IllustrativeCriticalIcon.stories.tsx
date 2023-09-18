import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeCriticalIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeCriticalIcon',
  component: IllustrativeCriticalIcon,
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
} satisfies Meta<typeof IllustrativeCriticalIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeCriticalIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
