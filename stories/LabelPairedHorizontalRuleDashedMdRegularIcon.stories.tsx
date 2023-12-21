import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHorizontalRuleDashedMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHorizontalRuleDashedMdRegularIcon',
  component: LabelPairedHorizontalRuleDashedMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedHorizontalRuleDashedMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHorizontalRuleDashedMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
