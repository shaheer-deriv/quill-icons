import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneFileChartColumnBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneFileChartColumnBoldIcon',
  component: StandaloneFileChartColumnBoldIcon,
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
} satisfies Meta<typeof StandaloneFileChartColumnBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneFileChartColumnBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
