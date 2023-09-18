import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeUnderstandTheRisksIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeUnderstandTheRisksIcon',
  component: IllustrativeUnderstandTheRisksIcon,
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
} satisfies Meta<typeof IllustrativeUnderstandTheRisksIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeUnderstandTheRisksIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
