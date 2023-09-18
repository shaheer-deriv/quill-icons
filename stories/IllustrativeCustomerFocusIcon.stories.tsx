import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeCustomerFocusIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeCustomerFocusIcon',
  component: IllustrativeCustomerFocusIcon,
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
} satisfies Meta<typeof IllustrativeCustomerFocusIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeCustomerFocusIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
