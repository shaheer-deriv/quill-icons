import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivPartnersWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivPartnersWhiteIcon',
  component: SubBrandDerivPartnersWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivPartnersWhiteIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivPartnersWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
