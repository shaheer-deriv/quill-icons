import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeDefinePositionIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeDefinePositionIcon',
  component: IllustrativeDefinePositionIcon,
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
} satisfies Meta<typeof IllustrativeDefinePositionIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeDefinePositionIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
