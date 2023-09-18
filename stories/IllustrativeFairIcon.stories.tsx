import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeFairIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeFairIcon',
  component: IllustrativeFairIcon,
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
} satisfies Meta<typeof IllustrativeFairIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeFairIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
