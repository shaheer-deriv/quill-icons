import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleSterlingMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleSterlingMdRegularIcon',
  component: LabelPairedCircleSterlingMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleSterlingMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleSterlingMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
