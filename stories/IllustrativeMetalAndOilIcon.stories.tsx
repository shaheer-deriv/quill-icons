import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeMetalAndOilIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeMetalAndOilIcon',
  component: IllustrativeMetalAndOilIcon,
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
} satisfies Meta<typeof IllustrativeMetalAndOilIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeMetalAndOilIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
