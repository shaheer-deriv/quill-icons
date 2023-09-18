import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeMultipleAssetsIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeMultipleAssetsIcon',
  component: IllustrativeMultipleAssetsIcon,
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
} satisfies Meta<typeof IllustrativeMultipleAssetsIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeMultipleAssetsIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
