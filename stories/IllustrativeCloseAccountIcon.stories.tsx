import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeCloseAccountIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeCloseAccountIcon',
  component: IllustrativeCloseAccountIcon,
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
} satisfies Meta<typeof IllustrativeCloseAccountIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeCloseAccountIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
