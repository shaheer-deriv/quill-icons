import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSterlingSignMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSterlingSignMdRegularIcon',
  component: LabelPairedSterlingSignMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedSterlingSignMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSterlingSignMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
