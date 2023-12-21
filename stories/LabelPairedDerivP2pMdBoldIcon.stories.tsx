import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDerivP2pMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDerivP2pMdBoldIcon',
  component: LabelPairedDerivP2pMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedDerivP2pMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDerivP2pMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
