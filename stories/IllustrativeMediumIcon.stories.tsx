import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeMediumIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeMediumIcon',
  component: IllustrativeMediumIcon,
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
} satisfies Meta<typeof IllustrativeMediumIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeMediumIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
