import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeIntegrityIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeIntegrityIcon',
  component: IllustrativeIntegrityIcon,
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
} satisfies Meta<typeof IllustrativeIntegrityIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeIntegrityIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
