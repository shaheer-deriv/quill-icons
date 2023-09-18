import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCaretDownBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCaretDownBoldIcon',
  component: StandaloneCaretDownBoldIcon,
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
} satisfies Meta<typeof StandaloneCaretDownBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCaretDownBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
