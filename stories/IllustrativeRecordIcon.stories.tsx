import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeRecordIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeRecordIcon',
  component: IllustrativeRecordIcon,
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
} satisfies Meta<typeof IllustrativeRecordIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeRecordIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
