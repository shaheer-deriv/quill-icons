import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHouseBlankMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHouseBlankMdBoldIcon',
  component: LabelPairedHouseBlankMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedHouseBlankMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHouseBlankMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
