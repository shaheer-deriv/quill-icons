import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedShieldCheckMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedShieldCheckMdRegularIcon',
  component: LabelPairedShieldCheckMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedShieldCheckMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedShieldCheckMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
