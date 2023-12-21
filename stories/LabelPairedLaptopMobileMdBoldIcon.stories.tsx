import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLaptopMobileMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLaptopMobileMdBoldIcon',
  component: LabelPairedLaptopMobileMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedLaptopMobileMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLaptopMobileMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
