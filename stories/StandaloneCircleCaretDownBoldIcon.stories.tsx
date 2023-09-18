import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleCaretDownBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleCaretDownBoldIcon',
  component: StandaloneCircleCaretDownBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleCaretDownBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleCaretDownBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
