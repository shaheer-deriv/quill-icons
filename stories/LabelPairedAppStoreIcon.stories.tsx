import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedAppStoreIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedAppStoreIcon',
  component: LabelPairedAppStoreIcon,
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
} satisfies Meta<typeof LabelPairedAppStoreIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedAppStoreIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
