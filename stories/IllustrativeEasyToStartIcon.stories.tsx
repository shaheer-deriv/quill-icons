import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeEasyToStartIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeEasyToStartIcon',
  component: IllustrativeEasyToStartIcon,
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
} satisfies Meta<typeof IllustrativeEasyToStartIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeEasyToStartIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
