import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSunBrightMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSunBrightMdRegularIcon',
  component: LabelPairedSunBrightMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedSunBrightMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSunBrightMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
