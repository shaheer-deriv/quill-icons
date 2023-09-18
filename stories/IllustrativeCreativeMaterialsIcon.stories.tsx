import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeCreativeMaterialsIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeCreativeMaterialsIcon',
  component: IllustrativeCreativeMaterialsIcon,
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
} satisfies Meta<typeof IllustrativeCreativeMaterialsIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeCreativeMaterialsIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
